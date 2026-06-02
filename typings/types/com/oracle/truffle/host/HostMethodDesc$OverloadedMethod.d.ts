import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { HostMethodDesc$SingleMethod } from '../../../../com/oracle/truffle/host/HostMethodDesc$SingleMethod.d.ts'
export class HostMethodDesc$OverloadedMethod extends HostMethodDesc {
    constructor(overloads: HostMethodDesc$SingleMethod[])
    readonly overloads: HostMethodDesc$SingleMethod[];
    getDeclaringClassName(): string;
    getName(): string;
    getOverloads(): HostMethodDesc$SingleMethod[];
    isConstructor(): boolean;
    isInternal(): boolean;
    isMethod(): boolean;
    toString(): string;
}