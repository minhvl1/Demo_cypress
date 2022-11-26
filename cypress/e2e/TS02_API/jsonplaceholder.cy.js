
describe('Test GET request',()=>{
    it('should be able to send GET request',()=>{
            cy.request({
                url:'https://reqres.in/api/users/2',
                method:'GET'
            }).then(response =>{
                expect(response.status).to.eq(200)
                cy.log("Method 1 display response body ")
                // only display values
                cy.log(response.body.data.id)
                cy.log(response.body.data.email)
                cy.log(response.body.data.first_name)
                cy.log(response.body.support.text)


                cy.log("Method 2 display response body ")
                // both of keys and values
                for(let i =0; i< Object.values(response.body.data).length; i++){
                    cy.log(Object.keys(response.body.data)[i]+ " : " +Object.values(response.body.data)[i])
                }

            })
    })

        it('should be able to send POST request',()=>{
            let  url='https://jsonplaceholder.typicode.com/posts'
            let  headers= {
                'Content-type': 'application/json; charset=UTF-8',
            }

            let requestBody= {
                title: 'foo',
                body: 'bar',
                userId: 1
            }

            let requestObject={
                method: 'POST',
                url:url,
                headers: headers,
                body:requestBody
            }

            cy.request(requestObject).then(res=>{


                expect(res.status).to.eq(201,'Status is not 201')
                expect(res.body.body).to.eq(requestBody.body,'body is not match')

                cy.log(JSON.stringify(res.body))

                cy.log("Method 1 display response body ")
                // only display values
                cy.log(res.body.id)
                cy.log(res.body.title)
                cy.log(res.body.body)
                cy.log(res.body.userId)

                cy.log("Method 2 display response body ")
                // both of keys and values
                for(let i =0; i< Object.values(res.body).length; i++){
                    cy.log(Object.keys(res.body)[i]+ " : " +Object.values(res.body)[i])
                }

            })
        })

})