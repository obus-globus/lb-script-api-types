import type { ConfigException } from '../../../com/typesafe/config/ConfigException.d.ts'
import type { ConfigException$ValidationProblem } from '../../../com/typesafe/config/ConfigException$ValidationProblem.d.ts'
export class ConfigException$ValidationFailed extends ConfigException {
    constructor(arg0: ConfigException$ValidationProblem[])
    // private problems: ConfigException$ValidationProblem[];
    problems(): ConfigException$ValidationProblem[];
}