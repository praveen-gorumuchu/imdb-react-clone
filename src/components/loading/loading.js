import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './loading.scss';
export default function Loading() {
    return (_jsx("section", { className: 'absolute inset-0 flex justify-center w-full m-auto align-middle loading-section', children: _jsxs("div", { className: '', children: [_jsx("img", { src: "/src/assets/loading.gif", alt: "" }), _jsx("h3", { className: 'font-bold text-center', children: "Loading..." })] }) }));
}
