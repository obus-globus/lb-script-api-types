import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassSignature$IToken } from '../../../../org/spongepowered/asm/util/ClassSignature$IToken.d.ts'
import type { ClassSignature$TokenHandle } from '../../../../org/spongepowered/asm/util/ClassSignature$TokenHandle.d.ts'
export class ClassSignature$Token extends Object implements ClassSignature$IToken {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private array: boolean;
    // private classBound: ClassSignature$Token[];
    // private ifaceBound: ClassSignature$Token[];
    // private inner: boolean;
    // private signature: ClassSignature$IToken[];
    // private suffix: ClassSignature$IToken[];
    // private symbol: string;
    // private tail: ClassSignature$Token;
    // private type: string;
    addBound(arg0: string, arg1: boolean): ClassSignature$Token;
    addClassBound(arg0: string): ClassSignature$Token;
    addInnerClass(arg0: string): ClassSignature$Token;
    addInterfaceBound(arg0: string): ClassSignature$Token;
    addTypeArgument(arg0: string): ClassSignature$IToken;
    addTypeArgument(arg0: string): ClassSignature$IToken;
    addTypeArgument(arg0: ClassSignature$TokenHandle): ClassSignature$IToken;
    asBound(): string;
    asToken(): ClassSignature$Token;
    asType(): string;
    asType(arg0: boolean): string;
    // private getClassBound(): ClassSignature$Token[];
    // private getIfaceBound(): ClassSignature$Token[];
    // private getSignature(): ClassSignature$IToken[];
    // private getSuffix(): ClassSignature$IToken[];
    isRaw(): boolean;
    setArray(arg0: boolean): ClassSignature$IToken;
    setSymbol(arg0: string): ClassSignature$Token;
    setType(arg0: string): ClassSignature$Token;
    setWildcard(arg0: string): ClassSignature$IToken;
    toString(): string;
}