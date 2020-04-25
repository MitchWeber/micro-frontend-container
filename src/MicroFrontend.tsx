import * as React from "react";


export interface MicroFrontendProps {
    name: string,
    host: string
}

export default  class MicroFrontend extends React.Component<MicroFrontendProps> {

    renderMicroFrontend = () => {
        const { name } = this.props;

        // @ts-ignore
        window[`render${name}`](`${name}-container`);
        // E.g.: window.renderBrowse('browse-container', history);
    };

    componentWillUnmount() {
        const { name } = this.props;

        // @ts-ignore
        window[`unmount${name}`](`${name}-container`);
    }

    componentDidMount() {
        const { name, host } = this.props;
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                let pathToMain = (manifest.files ? manifest.files : manifest)['main.js'];
                pathToMain = pathToMain.startsWith("/") ? pathToMain : `/${pathToMain}`;
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = `${host}${pathToMain}`;
                script.onload = this.renderMicroFrontend;
                document.head.appendChild(script);
            });
    }

    render() {
        return <div id={`${this.props.name}-container`} />;
    }
}
