import type { Object } from '../../../java/lang/Object.d.ts'
export interface DTDHandler extends Object{
    notationDecl(arg0: string, arg1: string, arg2: string): void;
    unparsedEntityDecl(arg0: string, arg1: string, arg2: string, arg3: string): void;
}