<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    #[Route('/', name: 'chat')]
    public function index(): Response
    {
        $datos = $this->getDoctrine()->getRepository(User::class)->findAll();
        return $this->render('chat/whatsapp.html.twig', array('datos' => $datos));
    }
}
