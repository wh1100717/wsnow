import * as mongoose from "mongoose"

export class BaseDao {
  model: mongoose.Model < any >
  constructor(model: mongoose.Model < any > ) {
    this.model = model
  }
  async create(doc) {
    const data = await this.model.create(doc)
    return data
  }
  async getById(id) {
    const data = await this.model.findOne({
      _id: id
    })
    return data
  }
  async countByQuery(query) {
    const data = await this.model.count(query)
    return data
  }
  async getOneByQuery(query, projection) {
    const data = await this.model.findOne(query, projection)
    return data
  }
  async getByQuery(query, projection) {
    const data = await this.model.find(query, projection)
    return data
  }
  async getAll() {
    const data = await this.model.find({})
    return data
  }
  async delete(query) {
    const data = await this.model.remove(query)
    return data
  }
  async update(conditions, update, options) {
    try {
      const data = await this.model.update(conditions, update, options)
      return data
    } catch (err) {
      return err
    }
  }
}
