import type { Object } from '../../../java/lang/Object.d.ts'
export class NeuronUtils extends Object {
    static getNeuronCores(): number;
    static getNeuronCoresForDevice(paramarg0: string): number;
    static getNeuronDevices(paramarg0: string): string[];
    static hasNeuron(): boolean;
    private constructor()
}