interface CheckOutLayoutProps {
    children: React.ReactNode;
}

const CheckOutLayout = ({children}: CheckOutLayoutProps) => {
    return (
        <main>
                {children}
        </main>
     );
}
export default CheckOutLayout;