import { Helmet } from "react-helmet";
const MetaData = ({ titleText = "Create your own school app in 2 min" }) => {
    return (
        <Helmet title="PopX - Create your own school app in 2 min">
            <title>{titleText}</title>
            <meta
                name="description"
                content="Create your own school app in 2 min"
            />
        </Helmet>
    );
};
export default MetaData;
