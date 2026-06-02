import type { Attribute } from '../../javax/management/Attribute.d.ts'
import type { MBeanInfo } from '../../javax/management/MBeanInfo.d.ts'
import type { NotificationFilter } from '../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../javax/management/NotificationListener.d.ts'
import type { ObjectInstance } from '../../javax/management/ObjectInstance.d.ts'
import type { ObjectName } from '../../javax/management/ObjectName.d.ts'
import type { QueryExp } from '../../javax/management/QueryExp.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface MBeanServerConnection extends Object{
    addNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;
    addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;
    createMBean(arg0: string, arg1: ObjectName): ObjectInstance;
    createMBean(arg0: string, arg1: ObjectName, arg2: ObjectName): ObjectInstance;
    createMBean(arg0: string, arg1: ObjectName, arg2: ObjectName, arg3: Object[], arg4: string[]): ObjectInstance;
    createMBean(arg0: string, arg1: ObjectName, arg2: Object[], arg3: string[]): ObjectInstance;
    getAttribute(arg0: ObjectName, arg1: string): Object;
    getAttributes(arg0: ObjectName, arg1: string[]): (Object | null)[];
    getDefaultDomain(): string;
    getDomains(): string[];
    getMBeanCount(): number;
    getMBeanInfo(arg0: ObjectName): MBeanInfo;
    getObjectInstance(arg0: ObjectName): ObjectInstance;
    invoke(arg0: ObjectName, arg1: string, arg2: Object[], arg3: string[]): Object;
    isInstanceOf(arg0: ObjectName, arg1: string): boolean;
    isRegistered(arg0: ObjectName): boolean;
    queryMBeans(arg0: ObjectName, arg1: QueryExp): ObjectInstance[];
    queryNames(arg0: ObjectName, arg1: QueryExp): ObjectName[];
    removeNotificationListener(arg0: ObjectName, arg1: NotificationListener): void;
    removeNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;
    removeNotificationListener(arg0: ObjectName, arg1: ObjectName): void;
    removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;
    setAttribute(arg0: ObjectName, arg1: Attribute): void;
    setAttributes(arg0: ObjectName, arg1: (Object | null)[]): (Object | null)[];
    unregisterMBean(arg0: ObjectName): void;
}