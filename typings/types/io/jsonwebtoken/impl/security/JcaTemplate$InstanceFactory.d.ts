import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JcaTemplate$InstanceFactory<T extends unknown> extends Identifiable, Object{
    get(arg0: string, arg1: JavaMap<any, any>): T;
    getId(): string;
    getInstanceClass(): Class<T>;
}