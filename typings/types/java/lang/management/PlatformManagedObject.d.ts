import type { ObjectName } from '../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PlatformManagedObject extends Object{
    getObjectName(): ObjectName;
}