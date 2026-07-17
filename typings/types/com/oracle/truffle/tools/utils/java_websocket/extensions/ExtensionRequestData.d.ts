import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExtensionRequestData extends Object {
    static EMPTY_VALUE: string;
    static parseExtensionRequest(paramarg0: string): ExtensionRequestData;
    private constructor()
    readonly extensionName: string;
    readonly extensionParameters: JavaMap<string, string>;
    getExtensionName(): string;
    getExtensionParameters(): JavaMap<string, string>;
}