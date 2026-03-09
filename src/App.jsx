import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ViewNurse } from './pages/main/ViewNurse'
import { PublicLayout } from './layout/PublicLayout'
import { BookAppointment } from './pages/main/BookAppointment'
import { AuthLayout } from './layout/AuthLayout'
import { WizardLayout } from './layout/WizardLayout'
import { BasicInformation } from './pages/wizard/register/BasicInformation'
import { Documents } from './pages/wizard/register/Documents'
import { Location } from './pages/wizard/register/Location'
import { Professional } from './pages/wizard/register/Professional'
import { Skills } from './pages/wizard/register/Skills'
import { WorkPreferences } from './pages/wizard/register/WorkPreferences'
import { routes } from './routes/Routes'
import { Home } from './pages/public/Home'
import { About } from './pages/public/About'
import { Register } from './pages/account/Register'
import { Article } from './pages/public/Article'
import { Articles } from './pages/public/Articles'
import { HealthProfessionals } from './pages/public/HealthProfessionals'
import { Login } from './pages/account/Login'
import { JobSearch } from './pages/main/JobSearch'
import { WorkerSearch } from './pages/main/WorkerSearch'
import { NotAuthenticated } from './error/NotAuthenticated'
import { AuthProvider } from './providers/AuthProvider'
import { Dashboard } from './pages/main/Dashboard'
import { AdminArticles } from './pages/public/AdminArticles'
import { SignOut } from './pages/main/SignOut'

export const App = () =>{
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route element={<PublicLayout />}>
                        <Route path={routes.public().home()} element={<Home />} />
                        <Route path={routes.public().about()} element={<About />} />
                        <Route path={routes.public().article()} element={<Article />} />
                        <Route path={routes.public().articles()} element={<Articles />} />
                        <Route path={routes.public().adminArticles()} element={<AdminArticles />} />
                        <Route path={routes.public().healthProfessionals()} element={<HealthProfessionals />} />
                        <Route path={routes.public().signin()} element={<Login />} />
                        <Route path={routes.public().register()} element={<Register />} />
                    </Route>
                    <Route element={<WizardLayout />}>
                        <Route path={routes.wizard().basicInformation()} element={<BasicInformation />} />
                        <Route path={routes.wizard().documents()} element={<Documents />} />
                        <Route path={routes.wizard().location()} element={<Location />} />
                        <Route path={routes.wizard().professional()} element={<Professional />} />
                        <Route path={routes.wizard().skills()} element={<Skills />} />
                        <Route path={routes.wizard().workPreferences()} element={<WorkPreferences />} />
                    </Route>
                    <Route element={<AuthLayout />}>
                        <Route path={routes.main().dashboard()} element={<Dashboard />} />
                        <Route path={routes.main().bookAppointment()} element={<BookAppointment />} />
                        <Route path={routes.main().jobSearch()} element={<JobSearch />} />
                        <Route path={routes.main().workerSearch()} element={<WorkerSearch />} />
                        <Route path={routes.main().viewNurses()} element={<ViewNurse />} />
                        <Route path={routes.main().signOut()} element={<SignOut />} />
                    </Route>
                    <Route path={routes.error().authenticated()} element={<NotAuthenticated />} />
                    <Route path="/" element={<Navigate to={routes.public().home()} />} />
                </Routes>
            </HashRouter>
        </AuthProvider>
    )
}

export default App
