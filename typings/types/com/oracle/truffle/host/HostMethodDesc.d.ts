import type { HostMethodDesc$SingleMethod } from '../../../../com/oracle/truffle/host/HostMethodDesc$SingleMethod.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostMethodDesc extends Object {
    constructor()
    getDeclaringClassName(): string;
    getName(): string;
    getOverloads(): HostMethodDesc$SingleMethod[];
    isConstructor(): boolean;
    isInternal(): boolean;
    isInvocable(): boolean;
    isMethod(): boolean;
}