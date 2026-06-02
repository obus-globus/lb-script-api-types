import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { ByReference } from '../../../../com/sun/jna/ptr/ByReference.d.ts'
export class NativeLongByReference extends ByReference {
    constructor()
    constructor(arg0: NativeLong)
    getValue(): NativeLong;
    setValue(arg0: NativeLong): void;
    toString(): string;
}