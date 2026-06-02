import type { Attribute } from '../../javax/management/Attribute.d.ts'
import type { MBeanInfo } from '../../javax/management/MBeanInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DynamicMBean extends Object{
    getAttribute(arg0: string): Object;
    getAttributes(arg0: string[]): (Object | null)[];
    getMBeanInfo(): MBeanInfo;
    invoke(arg0: string, arg1: Object[], arg2: string[]): Object;
    setAttribute(arg0: Attribute): void;
    setAttributes(arg0: (Object | null)[]): (Object | null)[];
}