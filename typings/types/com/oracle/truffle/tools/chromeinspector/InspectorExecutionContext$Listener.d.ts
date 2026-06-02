import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InspectorExecutionContext$Listener extends Object{
    contextCreated(id: number, name: string): void;
    contextDestroyed(id: number, name: string): void;
}