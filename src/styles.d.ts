// For TypeScript to reconize .module.scss
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.scss';
