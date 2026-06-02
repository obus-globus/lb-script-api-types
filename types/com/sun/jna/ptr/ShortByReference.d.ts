import type { ByReference } from '../../../../com/sun/jna/ptr/ByReference.d.ts'
export class ShortByReference extends ByReference {
    constructor()
    constructor(arg0: number)
    getValue(): number;
    setValue(arg0: number): void;
    toString(): string;
}