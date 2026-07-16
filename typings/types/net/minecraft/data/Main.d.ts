import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DataGenerator } from '../../../net/minecraft/data/DataGenerator.d.ts'
export class Main extends Object {
    static addServerConverters(paramgenerator: DataGenerator, paraminput: Path[], paramserver: boolean, paramdev: boolean): void;
    static addServerDefinitionProviders(paramgenerator: DataGenerator, paramserver: boolean, paramreports: boolean): void;
    static main(paramargs: string[]): void;
    constructor()
}