import { UserProfile } from "../../profile/components/UserProfile";
import { Card } from "../../../components/Card";




export function PlayGround() {
    return (
        <div className="p-8 flex gap-8">
            <UserProfile 
                name= "Tapas Adhikary"
                avatarUrl="https://github.com/atapas.png"
                role="Senior Architech"
                isAdmin={true}
            />


            <UserProfile 
                name= "Shahedul Islam Joshi"
                avatarUrl="https://github.com/shahedul-islam-joshi.png"
                role="Aspiring Software Engineer"
                isAdmin={false}


            />

                <UserProfile 
                name= "AI Assistance"
                avatarUrl="https://ui-avatars.com/api/?name=AI&backgroung=random"
                role="Junior Developer"
                isAdmin={false}
            />





            <Card title="System Status">
                <p className="text-gray-600">All systems operational.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    Run Diagnostics
                </button>
            </Card>


        </div>
    );
}