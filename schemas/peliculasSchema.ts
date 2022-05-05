import Joi, { ObjectSchema } from "joi";

const ActorSchema: ObjectSchema = Joi.object({
    actor_id: Joi.number().integer(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    last_update: Joi.number().integer(),
});

const CategoriaSchema: ObjectSchema = Joi.object({
    category_id: Joi.number().integer(),
    name: Joi.string(),
    last_update: Joi.number().integer(),
});

const CiudadSchema: ObjectSchema = Joi.object({
    city_id: Joi.number().integer(),
    city: Joi.string(),
    country_id: Joi.number().integer(),
    last_update: Joi.number().integer(),
});

export { ActorSchema, CategoriaSchema, CiudadSchema };
