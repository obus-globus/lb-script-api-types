import type { MBeanServer } from '../../javax/management/MBeanServer.d.ts'
import type { ObjectName } from '../../javax/management/ObjectName.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface MBeanRegistration extends Object{
    postDeregister(): void;
    postRegister(arg0: boolean): void;
    preDeregister(): void;
    preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;
}