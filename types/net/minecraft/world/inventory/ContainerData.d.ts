import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ContainerData extends Object{
    get(dataId: number): number;
    getCount(): number;
    set(dataId: number, value: number): void;
}