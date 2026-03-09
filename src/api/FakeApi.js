import img from "../assets/images/profile.png";
import missionImg from "../assets/images/undraw_publish-article_u3z6.png";
import vissionImg from "../assets/images/undraw_travel-booking_a6s2.png";
import excelenceImg from "../assets/images/undraw_apartment-rent_oodr.png";

export const mockNews = async(data) =>{
    return new Promise((resolve)=>{
        const payload = {
            value: data?.value || '',
            category: data?.category || ''
        }
        const list = [
            {
                id: 1,
                attributes: {
                    title: "Nurse's Pride Launches New App Feature",
                    summary: "Healthcare professionals can now track shifts, payments, and client feedback all in one place.",
                    image: img,
                    date: "2026-03-07",
                    category: "App Updates",
                    author: "Nurse's Pride Team",
                    authorRole: "Product & Community",
                    readingTime: "4 min read",
                    tags: ["Technology", "Healthcare Apps", "Updates"],
                    content: [
                        "Nurse's Pride continues to innovate in the healthcare staffing industry with the launch of a powerful new feature designed to simplify how nurses manage their daily work.",
                        "The latest update introduces tools that allow healthcare professionals to track upcoming shifts, review completed appointments, and monitor payments all in one centralized dashboard.",
                        "This improvement helps reduce administrative overhead and gives nurses more time to focus on what matters most — providing high-quality patient care.",
                        "Clients will also benefit from improved transparency, including easier scheduling, clearer communication, and reliable feedback tools within the platform.",
                        "The Nurse's Pride team plans to continue expanding the platform with additional features aimed at improving reliability, flexibility, and care coordination across the healthcare community."
                    ]
                }
            },{
                id: 2,
                attributes: {
                    title: "Home Care Trends in 2026",
                    summary: "Explore the latest insights on in-home care demand and the rise of independent caregivers.",
                    image: missionImg,
                    date: "2026-03-05",
                    category: "Industry Insights",
                    author: "Dr. Michael Harris",
                    authorRole: "Healthcare Analyst",
                    readingTime: "5 min read",
                    tags: ["Healthcare Trends", "Home Care", "Industry"],
                    content: [
                        "Demand for in-home healthcare services continues to grow rapidly in 2026 as more families seek personalized care solutions for their loved ones.",
                        "Advances in digital platforms like Nurse's Pride are helping connect patients with qualified healthcare professionals faster than ever before.",
                        "Independent caregivers and freelance nurses are also playing a larger role in the healthcare ecosystem, offering flexible scheduling and specialized care services.",
                        "Experts predict that the combination of technology and decentralized healthcare staffing will reshape how care is delivered over the next decade.",
                        "Platforms that prioritize trust, transparency, and quality will lead the next phase of healthcare innovation."
                    ]
                }
            },{
                id: 3,
                attributes: {
                    title: "Tips for Avoiding Burnout as a Nurse",
                    summary: "Practical advice to help healthcare professionals maintain work-life balance while managing multiple shifts.",
                    image: vissionImg,
                    date: "2026-03-01",
                    category: "Wellness",
                    author: "Sarah Thompson, RN",
                    authorRole: "Senior Registered Nurse",
                    readingTime: "3 min read",
                    tags: ["Wellness", "Nursing", "Mental Health"],
                    content: [
                        "Burnout remains one of the most significant challenges facing healthcare professionals today.",
                        "Nurses often work long shifts, manage emotionally demanding situations, and balance multiple responsibilities at once.",
                        "Experts recommend prioritizing rest, maintaining strong support networks, and setting clear boundaries between work and personal life.",
                        "Digital platforms like Nurse's Pride can also help nurses better manage their schedules, reducing unnecessary stress caused by poor shift coordination.",
                        "Taking proactive steps toward mental wellness ensures nurses can continue delivering compassionate and effective care."
                    ]
                }
            },{
                id: 4,
                attributes: {
                    title: "Client Success Stories",
                    summary: "Hear from clients who found trusted healthcare professionals through Nurse's Pride.",
                    image: excelenceImg,
                    date: "2026-02-28",
                    category: "Stories",
                    author: "Community Team",
                    authorRole: "Nurse's Pride",
                    readingTime: "4 min read",
                    tags: ["Community", "Success Stories", "Care"],
                    content: [
                        "For many families, finding reliable healthcare professionals can be a stressful and time-consuming process.",
                        "Nurse's Pride has helped connect thousands of clients with qualified nurses who provide compassionate care at home.",
                        "Clients frequently highlight the platform’s ability to quickly match them with experienced professionals who meet their specific healthcare needs.",
                        "One client shared how the platform helped them find overnight care for their elderly parent within hours of signing up.",
                        "Stories like these demonstrate the growing importance of trusted digital platforms in improving access to healthcare services."
                    ]
                }
            }
        ];
        
        setTimeout(() => {
            resolve({ data: { data: list.filter((item) => find(item, payload)) } });
        }, 500);
    });
}

const find = (item, payload) =>{
    const categoryMatches = !payload.category 
        ? null : payload.category === 'All' || item.attributes.category === payload.category;
    const valueMatches = Object.values(item.attributes).find((value)=>{
        return value.toLowerCase().includes(payload.value.toLowerCase());
    });
    if(!categoryMatches) return valueMatches;
    return categoryMatches && valueMatches;
}
