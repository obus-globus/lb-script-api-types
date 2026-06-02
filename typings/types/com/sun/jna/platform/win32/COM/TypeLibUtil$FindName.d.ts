import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { ITypeInfo } from '../../../../../../com/sun/jna/platform/win32/COM/ITypeInfo.d.ts'
import type { OaIdl$MEMBERID } from '../../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeLibUtil$FindName extends Object {
    constructor(arg0: string, arg1: Pointer[], arg2: OaIdl$MEMBERID[], arg3: number)
    readonly nameBuf: string;
    // private pTInfo: Pointer[];
    // private pcFound: number;
    // private rgMemId: OaIdl$MEMBERID[];
    getFound(): number;
    getMemId(): OaIdl$MEMBERID[];
    getNameBuf(): string;
    getTInfo(): ITypeInfo[];
}