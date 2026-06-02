import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExtensionRequestData extends Object {
    static EMPTY_VALUE: string;
    static parseExtensionRequest(paramarg0: string): ExtensionRequestData;
    private constructor()
    readonly extensionName: string;
    readonly extensionParameters: { [key: string]: string };
    getExtensionName(): string;
    getExtensionParameters(): { [key: string]: string };
}