import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ResourceDescriptor<T extends unknown> extends Object{
    allocate(): T;
    canUsePhysicalResource(other: ResourceDescriptor<Object>): boolean;
    free(resource: T): void;
    prepare(resource: T): void;
}