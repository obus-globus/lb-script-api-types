import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { MBeanServer } from '../../javax/management/MBeanServer.d.ts'
import type { ObjectName } from '../../javax/management/ObjectName.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface QueryExp extends Serializable, Object{
    apply(arg0: ObjectName): boolean;
    setMBeanServer(arg0: MBeanServer): void;
}