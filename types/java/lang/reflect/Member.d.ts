import type { Class } from '../../../java/lang/Class.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Member extends Object{
    accessFlags(): AccessFlag[];
    getDeclaringClass(): Class<Object>;
    getModifiers(): number;
    getName(): string;
    isSynthetic(): boolean;
}