declare function About(): JSX.Element;

interface IProps {
    a: number;
    b: string;
}
declare function Welcome(props: IProps): JSX.Element;

declare function index(): JSX.Element;

export { About, index as ToolTip, Welcome };
