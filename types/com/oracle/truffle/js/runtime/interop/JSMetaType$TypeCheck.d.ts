import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSMetaType$TypeCheck extends Object{
    check(lib: InteropLibrary, value: Object): boolean;
}