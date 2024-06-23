const SectionHeading = ({ title }) => {
    return (
        <div className="relative bg-[url('/banner-img.png')] bg-cover bg-no-repeat bg-center h-[200px]">
            <div className="absolute inset-0 bg-black opacity-40 z-0" />
            <p className="text-white font-bold text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">{title}</p>
        </div>
    );
}

export default SectionHeading;
