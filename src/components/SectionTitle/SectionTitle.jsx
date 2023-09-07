

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="text-white">---{subHeading}---</p>
            <h3 className="text-4xl text-white">{heading}</h3>
        </div>
    );
};

export default SectionTitle;