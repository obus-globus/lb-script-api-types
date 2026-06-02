import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
export class TransliteratorRegistry$Spec extends Object {
    constructor(theSpec: string)
    // private isNextLocale: boolean;
    // private isSpecLocale: boolean;
    // private nextSpec: string;
    // private res: ICUResourceBundle;
    // private scriptName: string;
    // private spec: string;
    readonly top: string;
    get(): string;
    getBundle(): ResourceBundle;
    getTop(): string;
    hasFallback(): boolean;
    isLocale(): boolean;
    next(): string;
    reset(): void;
    // private setupNext(): void;
}