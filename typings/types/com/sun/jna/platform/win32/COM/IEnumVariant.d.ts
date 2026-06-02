import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Variant$VARIANT } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IEnumVariant extends IUnknown, Object{
    Clone(): IEnumVariant;
    Next(arg0: number): Variant$VARIANT[];
    Reset(): void;
    Skip(arg0: number): void;
}