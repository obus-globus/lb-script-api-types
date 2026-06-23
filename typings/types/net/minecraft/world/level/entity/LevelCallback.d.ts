import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LevelCallback<T extends unknown> extends Object{
    onCreated(entity: T): void;
    onDestroyed(entity: T): void;
    onSectionChange(entity: T): void;
    onTickingEnd(entity: T): void;
    onTickingStart(entity: T): void;
    onTrackingEnd(entity: T): void;
    onTrackingStart(entity: T): void;
}