const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center mt-52 lg:mt-20'>
            {children}
        </div>
    )
}

export { Layout }