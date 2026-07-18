import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Unmergeable extends Object{
    unmergedValues(): AbstractConfigValue[];
}