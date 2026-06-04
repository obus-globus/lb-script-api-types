import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { URLWrapper } from '../../../../../net/lenni0451/commons/httpclient/utils/URLWrapper.d.ts'
import type { URLWrapper$Parameter } from '../../../../../net/lenni0451/commons/httpclient/utils/URLWrapper$Parameter.d.ts'
export class URLWrapper$QueryParametersWrapper extends Object {
    constructor(null_: URLWrapper$QueryParametersWrapper)
    readonly parameters: URLWrapper$Parameter[];
    addParameter(arg0: string, arg1: string): URLWrapper$QueryParametersWrapper;
    addParameter(arg0: URLWrapper$Parameter): URLWrapper$QueryParametersWrapper;
    addParameters(arg0: URLWrapper$Parameter[]): URLWrapper$QueryParametersWrapper;
    addParameters(arg0: { [key: string]: string }): URLWrapper$QueryParametersWrapper;
    apply(): URLWrapper;
    clearParameters(): URLWrapper$QueryParametersWrapper;
    getFirstValue(arg0: string): Optional<string>;
    getParameters(): URLWrapper$Parameter[];
    getValues(arg0: string): string[];
    hasParameter(arg0: string): boolean;
    removeParameters(arg0: string): URLWrapper$QueryParametersWrapper;
    setParameter(arg0: string, arg1: string): URLWrapper$QueryParametersWrapper;
    setParameters(arg0: { [key: string]: string }): URLWrapper$QueryParametersWrapper;
}