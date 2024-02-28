import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const NavMarcher = () => {

    const selector = useSelector((state)=>state.MarcherCard.length)
    return (
        <div >
         
            <nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-white py-3 shadow-sm">

                <div style={{  backgroundColor:'50px solid royalblue',}} className='container'
              
                > 
                <motion.a className="navbar-brand fw-bold fs-4" href="#"
                    animate={{
                        scale:1,
                        color:'black',
                        textShadow: '4px 4px 4px #DC143C' 
                      }}
                      transition={{
                        duration:1,
                        delay:2
                        
                      }}
                >
                   <img src="https://thumbs.dreamstime.com/b/online-shopping-e-commerce-logo-vector-design-illustration-ecommerce-online-store-logo-online-shopping-e-commerce-logo-178571891.jpg" alt="" width={'100px'} height={'50x'} /></motion.a>
                   {/*  LA COLLECTION */}
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mx-auto mb-2 mb-lg-0">
                        <motion.li className="nav-item active"
                           whileHover={{
                            x:'10px'
                        }}>
                            <Link className="nav-link" style={{color:"#FFA500"}} to={'/marcher'}
                            
                            
                            
                            
                            >Home</Link>
                        </motion.li>
                        <motion.li className="nav-item"
                           whileHover={{
                            x:'10px'
                        }}>
                            <motion.a className="nav-link" href="#" 
                                    animate={{
                                        scale:1,
                                        color:'#FFA500',
                                      
                          
                                        
                                        
                                      }}
                                      transition={{
                                        duration:1,
                                        delay:1
                                        
                                      }}
                            
                            >Products</motion.a>
                        </motion.li>
                      
                        <motion.li className="nav-item"
                           whileHover={{
                            x:'10px'
                        }}>
                            <motion.a className="nav-link " href="#" 
                                animate={{
                                    scale:1,
                                    color:'#FFA500',
 
                                  }}
                                  transition={{
                                    duration:1,
                                    delay:1
                                    
                                  }}
                            
                            
                            >About</motion.a>
                        </motion.li>
                        <motion.li className="nav-item"
                        whileHover={{
                            x:'10px'
                        }}
                        
                        >
                            <motion.a className="nav-link " href="#"

                              animate={{
                                scale:1,
                                color:'#FFA500',
                              
                  
                                
                                
                              }}
                              transition={{
                                duration:1,
                                delay:1
                                
                              }}
                            
                            >Contact</motion.a>
                        </motion.li>
                    </ul>
                  <div className="buttons mx-3">
                    <motion.a href="" className='btn btn-outline-dark mx-3'
                     whileHover={{
                        scale:1.2,
                        background:'darkgoldenrod',
                        border:'none'
                     }}
                    
                    >
                    <svg className='ms-1 ' xmlns="http://www.w3.org/2000/svg" width="0.84em" height="1em" viewBox="0 0 256 306"><path fill="#001761" d="M167.785 56.146v156.411h-79.57V56.146C28.422 75.7-8.295 135.81 1.607 197.937C11.507 260.063 65.09 305.782 128 305.782c62.91 0 116.492-45.72 126.393-107.845c9.902-62.126-26.815-122.236-86.608-141.791"/><circle cx="128" cy="39.785" r="39.785" fill="#267CF9"/></svg>
                    Login</motion.a>
                    <a href='' className='btn btn-outline-dark mx-2 '>
                    <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="1.29em" height="1em" viewBox="0 0 256 199"><path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634c-3.073 0-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976c0 6.586 4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"/><path fill="#FF5F00" d="M93.298 16.903h69.15v124.251h-69.15z"/><path fill="#EB001B" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125"/><path fill="#F79E1B" d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029"/></svg>
                    Register</a>
                    <Link to={'/marcher/card'} className='btn btn-outline-dark mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M13.2 1.5s-1.391-.041-1.946.5c-.534.52-.754.918-.754 2H1.2l1.394 4.814c.003.008.01.015.013.022c.235.657.848 1.13 1.579 1.158l.013.006h6.5v.2s.001.3-.199.7c-.2.4-.3.6-1.1.6H2.9c-1 0-1 1.5 0 1.5h6.4c1.2 0 2.1-.7 2.4-1.4c.3-.7.3-1.3.3-1.3V4c0-.524.229-1 .7-1h.55a.75.75 0 0 0 0-1.5zM9.2 13c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-5 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"/></svg>
                    Cart ({selector})</Link>
                  </div>
                </div>
                </div>
            </nav>
    
        </div>
    );
}

export default NavMarcher;
