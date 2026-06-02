import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface InternalResourceCache$ResourcesVisitor<T extends Throwable> extends Object{
    visit(componentId: string, resources: E[]): void;
}