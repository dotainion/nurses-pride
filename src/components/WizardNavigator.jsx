import { useLayoutEffect, useState } from "react";
import { routes } from "../routes/Routes";
import { useLocation } from "react-router-dom";
import { useWizard } from "../providers/WizardProvider"

export const WizardNavigator = ({children}) =>{
    const { jumpTo, toPrev, toNext } = useWizard();

    const [prevStep, setPrevStep] = useState(null);
    const [nextStep, setNextStep] = useState(null);
    const [currentStep, setCurrentStep] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const location = useLocation();

    const steps = [
        {
            title: 'Basic Information',
            route: routes.wizard().basicInformation()
        },{
            title: 'Professional',
            route: routes.wizard().professional()
        },{
            title: 'Skills',
            route: routes.wizard().skills()
        },{
            title: 'Documents',
            route: routes.wizard().documents()
        },{
            title: 'Work Preferences',
            route: routes.wizard().workPreferences()
        },{
            title: 'Location',
            route: routes.wizard().location()
        },
    ];

    const prev = () =>{
        if(!prevStep) return;
        toPrev(prevStep.route);
    }

    const next = () =>{
        if(!nextStep) return;
        toNext(nextStep.route);
    }

    const jump = (step) =>{
        jumpTo(step.route);
    }

    useLayoutEffect(()=>{
        const current = steps.find((step)=>step.route === location.pathname);
        let index = steps.indexOf(current);
        setCurrentStep(current);

        if(index === 0) setPrevStep(null);
        else setPrevStep(steps[index -1]);

        if(index +1 === steps.length) setNextStep(null);
        else setNextStep(steps[index +1]);
        setCurrentIndex(steps.indexOf(current));
    }, [location]);

    return(
        <>
            <div className="wizard-nav d-flex justify-content-between align-items-start user-select-none mb-5 w-100">
                {steps.map((step, i) => (
                    <div
                        onClick={()=>jump(step)}
                        className="d-flex flex-column align-items-center text-center position-relative"
                        style={{cursor: 'pointer', flex: 1}}
                        key={i + 1}
                    >
                        <div
                            className={`step rounded-circle d-flex justify-content-center align-items-center fw-bold mb-1 bg-${
                                step.route === currentStep?.route
                                    ? 'primary'
                                    : i < currentIndex
                                        ? 'success'
                                        : 'light'
                            } text-${
                                step.route === currentStep?.route || i < currentIndex 
                                    ? 'white' 
                                    : 'secondary'
                            }`}
                            style={{ zIndex: 1 }}
                        >
                            {i + 1}
                        </div>

                        <span
                            className={`text-break text-${
                                step.route === currentStep?.route 
                                    ? 'primary'
                                    : i < currentIndex
                                        ? 'success' 
                                        : 'secondary'
                            }`}
                            style={{
                                maxWidth: '80px',
                                fontSize: '9px'
                            }}
                        >
                            {step.title}
                        </span>

                        {i < (steps.length - 1) && (
                            <div
                                className={`line position-absolute start-50 translate-middle-y w-100 bg-${
                                    i < currentIndex
                                        ? 'success' 
                                        : 'light'
                                }`}
                                style={{
                                    height: '4px',
                                    zIndex: 0,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
            {children}
            <div className="d-flex justify-content-center mt-5 mb-3">
                <div className="btn-group">
                    <button
                        onClick={prev}
                        className="btn btn-sm btn-outline-primary px-3"
                        disabled={!prevStep}
                    >
                        ← Previous
                    </button>
                    {nextStep ? (
                        <button
                            onClick={next}
                            className="btn btn-sm btn-outline-primary px-4"
                        >
                            Next →
                        </button>
                    ):(
                        <button
                            onClick={()=>null}
                            className="btn btn-sm btn-outline-success px-4"
                        >
                            Done →
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}