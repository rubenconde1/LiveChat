<?php

namespace App\Controller;

use App\Entity\Message;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Form\MessageFormType;

class PageController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $message = new Message();
        $form = $this->createForm(MessageFormType::class, $message);
        return $this->render('page/index.html.twig', [
            'form'=> $form->createView()
        ]); 

    }
}