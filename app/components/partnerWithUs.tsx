interface PartnerWithUsProps {
    className?: string;
    children?: React.ReactNode;
}
const PartnerWithUs = ({ className, children }: PartnerWithUsProps) => {
    return (
        <main>
        <div className="w-full">
            <form action="" className={className}>
               {children}
            </form>
        </div>
        </main>
     );
}
export default PartnerWithUs;