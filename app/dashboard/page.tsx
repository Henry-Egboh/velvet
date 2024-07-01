'use client'
import Link from "next/link";
const DashboardDefaultPage = () => {
    return (
        <aside>
            <div>
                <h3>Account Info</h3>
                <ul>
                    <li>
                        <Link href={'/dashboard/settings'}>User Settings</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Account</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Account</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Account</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Account</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Insights</h3>
                <ul>
                    <li>
                        <Link href={'/account'}>Little Insights</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Little Insights</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Little Insights</Link>
                    </li>
                    <li>
                        <Link href={'/account'}>Little Insights</Link>
                    </li>
                </ul>
            </div>
        </aside>
     );
}

export default DashboardDefaultPage;