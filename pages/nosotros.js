import Image from "next/image"
import Layout from "@/components/layout"
import Link from "next/link"
import styles from '../styles/Nosotros.module.css'


function Nosotros() {
  return (
    <>
        <Layout
            title="Nosotros"
            description="Sobre nosotros, GuitarLA, Tienda de musica"
        >
          <main className="contenedor">
              <h1 className="heading">Nosotros</h1>
              <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' alt="Imagen sobre nosotros" width={1000} height={800}/>

                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget imperdiet leo. Sed in posuere ipsum. Vivamus hendrerit non metus quis sodales. Aliquam vestibulum ultrices maximus. Suspendisse eu orci at felis facilisis fringilla. Proin fringilla, leo eu dapibus tincidunt, nunc ipsum consequat turpis, ut efficitur mauris sem sit amet orci. Vestibulum egestas sed magna in lobortis. In elit lectus, volutpat sit amet fringilla non, tempor non sem.</p>

                  <p>Aliquam aliquam posuere augue a tristique. Nam augue nulla, porta eu mauris eu, dictum congue dolor. Vestibulum lobortis ex a velit tincidunt, vel ultricies orci volutpat. In viverra massa at aliquet mattis. Etiam vel tempus est, id egestas ante. Etiam faucibus iaculis urna, id egestas orci facilisis pretium. Aliquam finibus ligula gravida mi aliquet ultricies.</p>
                </div>
              </div>
          </main>
        </Layout>
    </>
  )
}
export default Nosotros