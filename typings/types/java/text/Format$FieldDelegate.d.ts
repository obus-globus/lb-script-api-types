import type { Format$Field } from '../../java/text/Format$Field.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Format$FieldDelegate extends Object{
    formatted(arg0: Format$Field, arg1: Object, arg2: number, arg3: number, arg4: Format$StringBuf): void;
    formatted(arg0: number, arg1: Format$Field, arg2: Object, arg3: number, arg4: number, arg5: Format$StringBuf): void;
}