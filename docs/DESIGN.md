# Design

## Tech stack
  * TypeScript
  * Express.js(API)
  * Jest(Tests)
  * Supertest(Tests)
  * Sequelize(ORM)
  * MySQL(Database)
  * Helmet(basic HTTP headers security)

## Key points
  * **Controller layer** <br />
    Each entity have its own controller with the necessary CRUD methods.

  * **Model layer** <br />
    Each entity have its own model with its structure and validations.

  * **Interface layer** <br />
    Each entity has its own interfaces that are used in their respective controllers.

  * **Routes layer** <br />
    Each entity has its own routes that use the methods of their controllers.
## Error handling
  All exceptions are centralized in a single middleware. It responds based on the type of exception generated.

## Tests
  The tests are separated into two types, process and validation. Process tests check for inconsistencies in the entity's route, while validation tests check the integrity of all entity validations.

## Commits
  They were separated into small commits with just the necessary code. Short and direct messages were used to refer to changes.