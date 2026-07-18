import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigRenderOptions extends Object {
    static concise(): ConfigRenderOptions;
    static defaults(): ConfigRenderOptions;
    private constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean)
    readonly comments: boolean;
    readonly formatted: boolean;
    readonly json: boolean;
    readonly originComments: boolean;
    readonly showEnvVariableValues: boolean;
    getComments(): boolean;
    getFormatted(): boolean;
    getJson(): boolean;
    getOriginComments(): boolean;
    getShowEnvVariableValues(): boolean;
    setComments(arg0: boolean): ConfigRenderOptions;
    setFormatted(arg0: boolean): ConfigRenderOptions;
    setJson(arg0: boolean): ConfigRenderOptions;
    setOriginComments(arg0: boolean): ConfigRenderOptions;
    setShowEnvVariableValues(arg0: boolean): ConfigRenderOptions;
    toString(): string;
}