const categories = [
	{
		"id": "51273205-5762-4655-8be8-a6ae227014d1",
		"categorie": "Gorgeous"
	},
	{
		"id": "06dde247-a1d4-43a9-838e-eb9d918fd64d",
		"categorie": "Unbranded"
	},
	{
		"id": "ab1dbd88-73d2-433b-a830-d4b3663df153",
		"categorie": "Handcrafted"
	},
	{
		"id": "5ed87bf5-2d49-4ac8-bb8a-52b7c0f302ab",
		"categorie": "Rustic"
	},
	{
		"id": "49d02307-a5b4-4aaa-9a95-c1ec2fa5c5e7",
		"categorie": "Unbranded"
	},
	{
		"id": "8b577460-fa86-4e4c-ac96-e93b659faf21",
		"categorie": "Sleek"
	},
	{
		"id": "dc4e12dc-bfa2-43ef-9dcb-0a064778e52f",
		"categorie": "Rustic"
	},
	{
		"id": "fed94f51-48d3-407d-994a-673a30b27221",
		"categorie": "Handcrafted"
	}
]

function eliminar(id){
    return categories.filter(item => item.id !== id)
}

console.log("Ejecutar funcioon")

const categoriaFiltrada = eliminar("51273205-5762-4655-8be8-a6ae227014d1")
console.log(categoriaFiltrada)

console.log("Categorias desues de funcion")
console.log(categories)
