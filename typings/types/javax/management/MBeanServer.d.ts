import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Attribute } from '../../javax/management/Attribute.d.ts'
import type { MBeanInfo } from '../../javax/management/MBeanInfo.d.ts'
import type { MBeanServerConnection } from '../../javax/management/MBeanServerConnection.d.ts'
import type { NotificationFilter } from '../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../javax/management/NotificationListener.d.ts'
import type { ObjectInstance } from '../../javax/management/ObjectInstance.d.ts'
import type { ObjectName } from '../../javax/management/ObjectName.d.ts'
import type { QueryExp } from '../../javax/management/QueryExp.d.ts'
import type { ClassLoaderRepository } from '../../javax/management/loading/ClassLoaderRepository.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface MBeanServer extends MBeanServerConnection, Object{
    addNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;
    addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;
    createMBean(arg0: string, arg1: ObjectName): ObjectInstance;
    createMBean(arg0: string, arg1: ObjectName, arg2: ObjectName): ObjectInstance;
    createMBean(arg0: string, arg1: ObjectName, arg2: ObjectName, arg3: Object[], arg4: string[]): ObjectInstance;
    createMBean(arg0: string, arg1: ObjectName, arg2: Object[], arg3: string[]): ObjectInstance;
    deserialize(arg0: ObjectName, arg1: number[]): ObjectInputStream;
    deserialize(arg0: string, arg1: ObjectName, arg2: number[]): ObjectInputStream;
    deserialize(arg0: string, arg1: number[]): ObjectInputStream;
    getAttribute(arg0: ObjectName, arg1: string): Object;
    getAttributes(arg0: ObjectName, arg1: string[]): (Object | null)[];
    getClassLoader(arg0: ObjectName): ClassLoader;
    getClassLoaderFor(arg0: ObjectName): ClassLoader;
    getClassLoaderRepository(): ClassLoaderRepository;
    getDefaultDomain(): string;
    getDomains(): string[];
    getMBeanCount(): number;
    getMBeanInfo(arg0: ObjectName): MBeanInfo;
    getObjectInstance(arg0: ObjectName): ObjectInstance;
    instantiate(arg0: string): Object;
    instantiate(arg0: string, arg1: ObjectName): Object;
    instantiate(arg0: string, arg1: ObjectName, arg2: Object[], arg3: string[]): Object;
    instantiate(arg0: string, arg1: Object[], arg2: string[]): Object;
    invoke(arg0: ObjectName, arg1: string, arg2: Object[], arg3: string[]): Object;
    isInstanceOf(arg0: ObjectName, arg1: string): boolean;
    isRegistered(arg0: ObjectName): boolean;
    queryMBeans(arg0: ObjectName, arg1: QueryExp): ObjectInstance[];
    queryNames(arg0: ObjectName, arg1: QueryExp): ObjectName[];
    registerMBean(arg0: Object, arg1: ObjectName): ObjectInstance;
    removeNotificationListener(arg0: ObjectName, arg1: NotificationListener): void;
    removeNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;
    removeNotificationListener(arg0: ObjectName, arg1: ObjectName): void;
    removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;
    setAttribute(arg0: ObjectName, arg1: Attribute): void;
    setAttributes(arg0: ObjectName, arg1: (Object | null)[]): (Object | null)[];
    unregisterMBean(arg0: ObjectName): void;
}